import React from "react";

function Dropdown({ title, options, func }) {
  return (
    <div className="select text-white">
      <select defaultValue="0" onChange={func} name="format" id="format" className="bg-[#1f1e24] border-amber-50 border-2 px-3">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>{o.toUpperCase()}</option>
        ))}
      </select>
    </div>
  );
}
export default Dropdown;
