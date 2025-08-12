
function ClickButton({ onClick }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        backgroundColor: "#f0f0f0",
      }}
    >
      <button
        onClick={onClick}
        style={{
          padding: "15px 30px",
          fontSize: "1.2em",
          cursor: "pointer",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#ff6a88",
          color: "white",
          transition: "background-color 0.3s ease",
        }}
      >
        Click
      </button>
    </div>
  );
}

export default ClickButton;
