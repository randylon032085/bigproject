import { useState } from "react";

function Test() {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      {/* <p>
        {flag ? (
          <>
            <input placeholder="Enter Someting" />
          </>
        ) : (
          "Hi"
        )}
      </p> */}

      {flag && <input placeholder="Enter Someting" />}
      <button onClick={() => setFlag(!flag)} className="py-2 px-2 bg-blue-500">
        TOGGLE
      </button>
    </div>
  );
}

export default Test;
