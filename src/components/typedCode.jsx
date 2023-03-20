import Typed from 'react-typed';

function TypedCode() {
  return (
    <Typed
      strings={[
        "I'm Ali.",
        "I'm a front-end developer.",
        'I love to code.',
        'I love to learn.',
        'I love to grow.',
      ]}
      typeSpeed={80}
      backSpeed={30}
      loop
    />
  );
}

export default TypedCode;
