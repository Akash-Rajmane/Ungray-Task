import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div>
      <h3>Top Products</h3>
      <table className="table-data">
        <thead className="table-head">
          <tr>
            <th>Product</th>
            <th>Sold amount</th>
            <th>Unit price</th>
            <th>Revenue</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Camera Mi 360</b>
            </td>
            <td>432</td>
            <td>
              <span>&#36;</span> 120
            </td>
            <td>
              <span>&#36;</span>51320
            </td>
            <td>
              <span>&#11088;</span> <b>4.81</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Message Gun</b>
            </td>
            <td>120</td>
            <td>
              <span>&#36;</span> 60
            </td>
            <td>
              <span>&#36;</span>23901
            </td>
            <td>
              <span>&#11088;</span> <b>3.44</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>Redmi Note 9</b>
            </td>
            <td>190</td>
            <td>
              <span>&#36;</span> 87.6
            </td>
            <td>
              <span>&#36;</span>87211
            </td>
            <td>
              <span>&#11088;</span> <b>2.5</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>One Plus Nord CE Lite 2</b>
            </td>
            <td>140</td>
            <td>
              <span>&#36;</span> 24.1
            </td>
            <td>
              <span>&#36;</span>29809
            </td>
            <td>
              <span>&#11088;</span> <b>4.65</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
