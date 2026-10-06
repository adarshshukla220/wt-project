import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({
  value,
  onChange,
}: SearchBarProps) => {
  return (
    <div
      style={{
        position: "relative",
        marginBottom: "32px",
      }}
    >
      <Search
        size={18}
        style={{
          position: "absolute",
          left: "14px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#737373",
        }}
      />

      <input
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder="Search products..."
        style={{
          width: "100%",
          height: "44px",
          padding: "0 16px 0 42px",
          border: "1px solid #d4d4d4",
          borderRadius: "8px",
          outline: "none",
          background: "#ffffff",
        }}
      />
    </div>
  );
};

export default SearchBar;