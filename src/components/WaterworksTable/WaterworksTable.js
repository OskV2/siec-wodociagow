import React, { useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { MRT_Localization_PL } from "material-react-table/locales/pl"; //Import Material React Table Translations

import "./WaterworksTable.scss";

//import images for table
import Error from "../../img/error.svg";
import Checkmark from "../../img/ok.svg";
import Search from "../../img/search.svg";

const WaterworksTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  //function for formatting date
  const formatDate = (dateString) => {
    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL", options);
  };

  //function for formatting status of device
  // if status is 'OK' then return green checkmark and proper class
  // if status is 'ERROR' then return red error icon and proper class
  const formatStatus = (state) => {
    {
      if (state === "OK") {
        return (
          <div className="table__status d-flex">
            <img className="table__status__img" src={Checkmark} alt="Ok" />
            <span className="table__status--ok">{state}</span>
          </div>
        );
      } else {
        return (
          <div className="table__status d-flex">
            <img className="table__status__img" src={Error} alt="Error" />
            <span className="table__status--error">{state}</span>
          </div>
        );
      }
    }
  };

  //function for showing and closing search input
  const openAndCloseSearch = () => {
    setShowSearch(!showSearch);
  };

  //data for table
  const data = [
    {
      name: "Oczyszczalnia Wielka",
      type: "OCZYSZCZALNIA",
      date: formatDate("1999-07-11T23:20:21.817Z"),
      state: formatStatus("OK"),
    },
    {
      name: "Źródło czerwone",
      type: "ŹRÓDŁO",
      date: formatDate("2020-05-12T23:50:21.817Z"),
      state: formatStatus("ERROR"),
    },
    {
      name: "Stacja przesyłowa",
      type: "STACJA",
      date: formatDate("2017-02-14T23:53:21.817Z"),
      state: formatStatus("OK"),
    },
    {
      name: "Oczyszczalnia mała",
      type: "OCZYSZCZALNIA",
      date: formatDate("2002-12-12T23:50:21.817Z"),
      state: formatStatus("OK"),
    },
    {
      name: "Źródło zielone",
      type: "ŹRÓDŁO",
      date: formatDate("2021-05-22T23:50:21.817Z"),
      state: formatStatus("ERROR"),
    },
  ];

  //table columns and data assigned to them
  const columns = [
    {
      accessorKey: "name",
      header: "Nazwa obiektu",
      size: 150,
    },
    {
      accessorKey: "type",
      header: "Rodzaj obiektu",
      size: 150,
    },
    {
      accessorKey: "date",
      header: "Data utworzenia",
      size: 200,
    },
    {
      accessorKey: "state",
      header: "Status",
      size: 150,
    },
  ];

  const numberOfDevices = data.length;

  const getOkDevices = () => {
    const okDevices = data.filter((item) => {
      const stateString = item.state.props.children[1];
      const state = stateString.props.children.toLowerCase();
      return state === "ok";
    });
    return okDevices.length;
  };
  const numberOfOkDevices = (
    <span className="table__number table__number--ok">{getOkDevices()}</span>
  );

  const getErrorDevices = () => {
    const errorDevices = data.filter((item) => {
      const stateString = item.state.props.children[1];
      const state = stateString.props.children.toLowerCase();
      return state === "error";
    });
    return errorDevices.length;
  };
  const numberOfErrorDevices = (
    <span className="table__number table__number--error">
      {getErrorDevices()}
    </span>
  );

  console.log(numberOfErrorDevices);
  console.log(numberOfOkDevices);

  //filtering data with input
  const filteredData = data.filter((item) => {
    //get state from span item, because item.state is object of image and span
    //so i could't get data directly from it
    const stateString = item.state.props.children[1];
    const state = stateString.props.children.toLowerCase();

    return (
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.type.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.date.toLowerCase().includes(searchValue.toLowerCase()) ||
      state.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <>
      <div className="table">
        <h2 className="table__title">Lista urządzeń</h2>
        <div className="table__search">
          <img
            className="table__search__icon"
            src={Search}
            alt="Search icon"
            onClick={openAndCloseSearch}
          />
          <input
            className={
              "table__search__input " +
              (showSearch
                ? " table__search__input--active "
                : "table__search__input--inactive ")
            }
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      <MaterialReactTable
        enableColumnActions={false} //disable unnecessary actions in table
        enableColumnFilters={false}
        enablePagination={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        columns={columns}
        data={filteredData}
        localization={MRT_Localization_PL} // added translation so "No records to display" is in polish
      />
      <span className="table__number">
        Liczba urządzeń: {numberOfDevices + " "}
        (Aktywne: {numberOfOkDevices}, Nieaktywne: {numberOfErrorDevices})
      </span>
    </>
  );
};

export default WaterworksTable;
