import ReacrtMarkdown from "react-markdown";

export default function ClaudeRecipie(props) {
  return (
    <section className="suggested-recipie-container" aria-live="polite">
        <h2>Chef Claude Recommends: </h2>
        <ReacrtMarkdown>{props.recipie}</ReacrtMarkdown>
    </section>
  );
}
