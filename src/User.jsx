import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./usersSlice";
import { useState } from "react";

const User = ({ data }) => {
  const [added, setadded] = useState(false);
  const [checked, setchecked] = useState(false);

  const dispatch = useDispatch();

  const handleCheckChange = (e) => {
    const checked = e.target.checked;
    if (checked) {
      dispatch(add(data));
      setadded(true);
      setchecked(true);
    } else {
      dispatch(remove(data.id));
      setadded(false);
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <img
        className="rounded-full w-28 h-28 items-center"
        src={data.avatar_url}
        alt="image.."
      />
      <p className="text-xl text-center">{data?.login}</p>
      <div className="flex flex-row justify-center items-center gap-1">
        <p className="bg-blue-600 rounded-md p-1 px-2">
          {added ? "added" : "Add to bookmark"}
        </p>
        <input type="checkbox" value={checked} onChange={handleCheckChange} />
      </div>
    </div>
  );
};

export default User;
