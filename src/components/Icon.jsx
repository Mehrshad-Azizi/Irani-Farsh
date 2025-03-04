const Icon = (props) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={props.viewBox}
        fill={props.fill || "#000"}
        width={props.width || 20}
        height={props.height || 20}
      >
        <path d={props.path} />
      </svg>
    );
  };
  
  export default Icon;
  