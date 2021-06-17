import React from 'react'
import './Employee.css'
const Employee = () => {
    return (
      <div>
        <div className="Employee">
          <div className="cover">
            <h4> Employee page</h4>
            <form className="flex-form">
              <label htmlFor="from">
                <i className="ion-location" />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Employee
