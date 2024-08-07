import React, { useState } from "react";
import { useGetUsersSearchQuery } from "../../context/api/userApi";
import "./header.scss";

const Header = () => {
  const [value, setValue] = useState("");
  const { data, error } = useGetUsersSearchQuery({ value: value.trim() });
  console.log(data);

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <h2>Logo</h2>
        </div>
        <form className="header__form">
          <input
            type="search"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search.."
          />
        </form>
        {value && (
          <div className="header__data">
            {error ? (
              <p className="header__not">{error.data.msg}</p>
            ) : (
              <div>
                {data?.payload?.map((el) => (
                  <div key={el._id} className="header__data-item">
                    <h3>{el?.fname}</h3>
                    <h4>@{el?.username}</h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
