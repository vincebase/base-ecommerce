import React, { useState, useEffect } from "react";
import { Select, Button, AutoComplete } from "antd";
import { SHOP } from "../../../common/defines";
import { useRouter } from "next/router";

const SearchBar = ({ fillData, placeholder }) => {
  const router = useRouter();

  const { Option } = Select;

  const [search, setSearch] = useState("");
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);

  const renderAutoFillItem = () => {
    return [];
  };

  const onSelectCateory = (value) => {};

  const openDropdownOption = (value) => {
    setShowDropdownOptions(true);
    setSearch(value);
  };

  const closeDropdownOption = () => {
    setShowDropdownOptions(false);
  };

  const onSelectOption = (value, option) => {
    setSearch(value);
    closeDropdownOption();
  };

  const onSearch = () => {
    if (!search || search === "") {
      router.push("/");
    } else {
      router.push({
        pathname: "/",
        query: { q: search },
      });
    }
  };

  return (
    <>
      <div className="menu-search">
        <div className="menu-search__form">
          <Select
            className="menu-search__form-select"
            defaultValue="Category"
            style={{ width: 150 }}
            // onChange={onSelectCateory}
          
          >
            {SHOP.category.map((item, index) => (
              <Option key={index} value={item.name}>
                {item.name}
              </Option>
            ))}
          </Select>
          <div className="menu-search__form-input">
            <AutoComplete
              allowClear
              backfill={true}
              open={showDropdownOptions}
              onSearch={openDropdownOption}
              onBlur={closeDropdownOption}
              onSelect={onSelectOption}
              options={renderAutoFillItem()}
              placeholder={placeholder}
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
            <Button onClick={onSearch}>
              <i className="icon_search" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
