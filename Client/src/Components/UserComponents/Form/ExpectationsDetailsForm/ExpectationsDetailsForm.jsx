// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
import style from './ExpectationsDetailsForm.module.css'; // Importing CSS Module

function ExpectationsDetailsForm() {
 



  return (
    <div className={style.formContainer}>

<div className={style.inputContainer}>
            <input
              className={style.input}
              type="text"
              placeholder=" "
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
            />
            <div className={style.textfield}>Minimum Annual Income</div>
          </div>
          <div className={style.inputContainer}>
            <input
              className={style.input}
              type="text"
              placeholder=" "
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
            />
            <div className={style.textfield}>Minimum Age</div>
          </div>
          <div className={style.inputContainer}>
            <input
              className={style.input}
              type="text"
              placeholder=" "
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
            />
            <div className={style.textfield}>Maximum Age</div>
          </div>

          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">
              Minimum Height</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Maximum Height</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Marital Status</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Education Expectations</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Caste Expectations</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className={style.radioButtonGroup}>
            <span className={style.title}>Open for Inter-Caste Marriage</span>

            <div>
              <label>
                <input
                  className={style.radioButton}
                  type="radio"
                  value="yes"
                  // checked={selectedOption === "yes"}
                  // onChange={handleOptionChange}
                />
                Yes
              </label>
            </div>
            <div>
              <label>
                <input
                  className={style.radioButton}
                  type="radio"
                  value="no"
                  // checked={selectedOption === "no"}
                  // onChange={handleOptionChange}
                />
                No
              </label>
            </div>
          </div>

    </div>
  );
}

export default ExpectationsDetailsForm;
