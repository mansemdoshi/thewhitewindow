"use client";
import React from "react";

function parseBlogContent(text) {
  if (!text) return [];
  const lines = text.split("\n");
  const blocks = [];
  let currentList = null;
  let currentParagraph = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ").trim();
      if (text) blocks.push({ type: "paragraph", text });
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if (currentList) {
      blocks.push(currentList);
      currentList = null;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "") {
      flushParagraph();
      flushList();
      continue;
    }

    const sectionMatch = line.match(/^(\d+)\.\s+(.+)/);
    if (sectionMatch) {
      const nextNonEmpty = lines.slice(i + 1).find((l) => l.trim() !== "");
      const isHeader =
        !line.endsWith(".") ||
        line.includes(":") ||
        line.includes("(") ||
        (nextNonEmpty &&
          !nextNonEmpty.trim().match(/^\d+\.\s/) &&
          !nextNonEmpty.trim().startsWith("•"));

      if (isHeader && line.length > 20) {
        flushParagraph();
        flushList();
        blocks.push({ type: "section-header", number: sectionMatch[1], text: sectionMatch[2] });
        continue;
      }
    }

    if (line.startsWith("•")) {
      flushParagraph();
      const itemText = line.replace(/^•\s*/, "").trim();
      if (!currentList) {
        currentList = { type: "bullet-list", items: [] };
      }
      currentList.items.push(itemText);
      continue;
    }

    if (line.startsWith("❌") || line.startsWith("✅")) {
      flushParagraph();
      flushList();
      blocks.push({
        type: line.startsWith("❌") ? "example-bad" : "example-good",
        text: line.replace(/^[❌✅]\s*/, "").trim(),
      });
      continue;
    }

    if (
      line.match(/^(A Gentle Reminder|Gentle Reminder)/) ||
      line.match(/^A Gentle Reminder/)
    ) {
      flushParagraph();
      flushList();
      blocks.push({ type: "reminder-header", text: line });
      continue;
    }

    if (line.startsWith('"') && line.endsWith('"')) {
      flushParagraph();
      flushList();
      blocks.push({ type: "quote", text: line });
      continue;
    }

    if (
      line.match(
        /^(Because|Small,|Warm|Stress|A Guide|Understanding how)/
      ) &&
      blocks.length === 0
    ) {
      flushParagraph();
      blocks.push({ type: "lead", text: line });
      continue;
    }

    flushList();
    currentParagraph.push(line);
  }

  flushParagraph();
  flushList();
  return blocks;
}

export default function BlogContent({ content }) {
  const blocks = parseBlogContent(content);

  return (
    <div className="blog-formatted-content">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "lead":
            return (
              <p key={i} className="blog-lead">
                <em>{block.text}</em>
              </p>
            );
          case "section-header":
            return (
              <h4 key={i} className="blog-section-header">
                <span className="section-number">{block.number}.</span>{" "}
                {block.text}
              </h4>
            );
          case "paragraph":
            return (
              <p key={i} className="blog-paragraph">
                {block.text}
              </p>
            );
          case "bullet-list":
            return (
              <ul key={i} className="blog-list">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "example-bad":
            return (
              <div key={i} className="blog-example bad">
                <span className="example-icon">❌</span> {block.text}
              </div>
            );
          case "example-good":
            return (
              <div key={i} className="blog-example good">
                <span className="example-icon">✅</span> {block.text}
              </div>
            );
          case "reminder-header":
            return (
              <div key={i} className="blog-reminder">
                <h4>{block.text}</h4>
              </div>
            );
          case "quote":
            return (
              <blockquote key={i} className="blog-quote">
                {block.text}
              </blockquote>
            );
          default:
            return (
              <p key={i}>{block.text}</p>
            );
        }
      })}
    </div>
  );
}
