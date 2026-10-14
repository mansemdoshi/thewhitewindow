import { Plus } from "lucide-react";

// Native <details> accordion: keyboard and screen-reader friendly with no JavaScript.
export default function FaqList({ items, numbered = false }) {
  return (
    <div className="faq-list">
      {items.map((faq) => (
        <details key={faq.id} id={`faq-${faq.id}`} className="faq-item">
          <summary>
            {numbered && <span className="faq-num">{String(faq.id).padStart(2, "0")}</span>}
            <span className="faq-q">{faq.question}</span>
            <Plus className="faq-icon" size={20} strokeWidth={1.5} aria-hidden="true" />
          </summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
