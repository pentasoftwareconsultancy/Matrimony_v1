import style from "./HoroscopeDetails.module.css"; // Make sure this CSS file exists and is correctly imported

const HoroscopeDetails = () => {
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
        <div className={style.textfield}>Enter Rashi</div>
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
            <div className={style.textfield}>Enter Birth Place</div>
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
            <div className={style.textfield}>Birth Time</div>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Gun</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Nadi</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Charan</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Nakshtra</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Devak</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>
          <div className={style.iconSelect}>
            <select
              className={style.iconSelect}
              // id="iconSelect"
              // value={selectedIcon}
              // onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <option value="">Yoni</option>
              <option value="male">Unmarried</option>
              <option value="female">Divorcee</option>
              <option value="female">Widow/Widower</option>
              <option value="female">Separated</option>
            </select>
          </div>

          <div className={style.radioButtonGroup}>
            <span className={style.title}>Horoscope Match is Must</span>

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
          <div className={style.radioButtonGroup}>
            <span className={style.title}>Are you Manglik</span>

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
};

export default HoroscopeDetails;
