import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getLaureats } from './table.action';
import './table.css';

function TableContainer() {
  const TABLE_HEAD = ['#', 'First name', 'Last name', 'Born city', 'Prizes'];

  const [period, setPeriod] = useState({
    start: 1901,
    end: 1910,
  });

  const dispatch = useDispatch();

  const laureates = useSelector(state => state.laureates);
  const laureatesByPeriod = laureates && laureates
    .filter(laureate => laureate.prizes
      .map(prize => prize.year >= period.start && prize.year <= period.end)
      .includes(true))

  const changePeriod = param => {
    if (param === "plus") {
      setPeriod({
        start: period.start + 10,
        end: period.end + 10,
      })
    } else {
      setPeriod({
        start: period.start - 10,
        end: period.end - 10,
      })
    }
  }

  const showButton = direction => {
    return (
      <button
        id={direction ? "Next" : "Previous"} // it is needed for cypress e2e tests
        type="button"
        className="btn btn-outline-primary"
        onClick={() => changePeriod(direction ? "plus" : null)}
      >
        {direction ? "Next ten years" : "Previous ten years"}
      </button>
    )
  }

  useEffect(() => {
    dispatch(getLaureats());
  }, []);

  return (
    <div className="table-wrapper">
      <div className="buttons-wrapper">
        <div className="mb-3 form-check">
          {`Period of time: ${period.start} - ${period.end}`}
        </div>
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          {showButton()}
          {showButton("plus")}
        </div>
      </div>
      <table className="table cell-wrapper" >
        <thead>
        <tr>
          {
            TABLE_HEAD.map((h,i) => <th key={i} scope="col">{h}</th>)
          }
        </tr>
        </thead>
        <tbody>
        {
          laureatesByPeriod && laureatesByPeriod.map((laureate, i) => (
            <tr key={laureate.id}>
              <th scope="row">{++i}</th>
              <td>{laureate.firstname}</td>
              <td>{laureate.surname}</td>
              <td>{laureate.bornCity}</td>
              <td>
                {
                  laureate.prizes.map(prize => {
                    return (
                      <React.Fragment key={prize.motivation}>
                        {`${prize.motivation}, ${prize.year}`}
                        <br />
                      </React.Fragment>
                    );
                  })
                }
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default TableContainer;

