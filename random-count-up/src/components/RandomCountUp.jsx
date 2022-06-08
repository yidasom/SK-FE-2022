export default function RandomCountUp(props) {
  const completedStyle = true
    ? {
        animationName: 'none',
      }
    : null;

  return (
    <div className="random-count-up">
      <output style={completedStyle}>0</output>
    </div>
  );
}
