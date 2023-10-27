// components/Hamburger.js
function Hamburger({ onClick }) {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-list"
      viewBox="0 0 16 16"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M2 11.5a.5.5 0 0 0 .5-.5h11a.5.5 0 0 0 0-1H2.5a.5.5 0 0 0-.5.5zM2 8.5a.5.5 0 0 0 .5-.5h11a.5.5 0 0 0 0-1H2.5a.5.5 0 0 0-.5.5zM2 5.5a.5.5 0 0 0 .5-.5h11a.5.5 0 0 0 0-1H2.5a.5.5 0 0 0-.5.5z"
      />
    </svg>
  );
}

export default Hamburger;
