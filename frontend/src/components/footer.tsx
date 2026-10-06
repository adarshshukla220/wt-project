const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e5e5",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "32px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            color: "#737373",
          }}
        >
          © 2026 Amazon Clone. Built for educational
          purposes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;