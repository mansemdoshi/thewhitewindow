// Turns a post's plain-text body (see data/posts.js) into semantic HTML.

function parse(text) {
  const blocks = [];
  let list = null;
  const endList = () => {
    if (list) blocks.push(list);
    list = null;
  };

  text.split("\n").forEach((raw, index) => {
    const line = raw.trim();
    if (!line) return endList();

    if (line.startsWith("•")) {
      list ??= { type: "list", items: [] };
      list.items.push(line.replace(/^•\s*/, ""));
      return;
    }
    endList();

    const section = line.match(/^(\d+)\.\s+(.+)/);
    const startsBlock = index === 0 || !text.split("\n")[index - 1].trim();
    if (section && startsBlock) {
      blocks.push({ type: "heading", number: section[1], text: section[2] });
    } else if (/^(A )?Gentle Reminder/i.test(line)) {
      blocks.push({ type: "reminder", text: "A gentle reminder" });
    } else if (line.startsWith("[avoid]") || line.startsWith("[try]")) {
      const avoid = line.startsWith("[avoid]");
      blocks.push({ type: "example", avoid, text: line.replace(/^\[\w+\]\s*/, "") });
    } else if (blocks.length === 0) {
      blocks.push({ type: "lead", text: line });
    } else {
      blocks.push({ type: "p", text: line });
    }
  });
  endList();
  return blocks;
}

export default function PostBody({ body }) {
  return (
    <div className="prose">
      {parse(body).map((block, i) => {
        switch (block.type) {
          case "lead":
            return (
              <p key={i} className="lead">
                {block.text}
              </p>
            );
          case "heading":
            return (
              <h2 key={i}>
                <span className="prose-num">{block.number}</span> {block.text}
              </h2>
            );
          case "reminder":
            return (
              <h2 key={i} className="prose-reminder">
                {block.text}
              </h2>
            );
          case "list":
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "example":
            return (
              // The post text already introduces each example ("Instead of:", "Try:").
              <p key={i} className={`prose-example ${block.avoid ? "is-avoid" : "is-try"}`}>
                {block.text}
              </p>
            );
          default:
            return <p key={i}>{block.text}</p>;
        }
      })}
    </div>
  );
}
