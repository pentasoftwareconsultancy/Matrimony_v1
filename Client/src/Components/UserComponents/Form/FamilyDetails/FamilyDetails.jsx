
import style from './FamilyDetails.module.css'; // Import as a CSS Module

function FamilyDetails() {

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
        <div className={style.textfield}>Enter Father Name</div>
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
        <div className={style.textfield}>Father Occupation</div>
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
        <div className={style.textfield}>Enter Mother Name</div>
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
        <div className={style.textfield}>Enter Mother Occupation</div>
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
        <div className={style.textfield}>Enter Mama's Name</div>
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
        <div className={style.textfield}>Native Place</div>
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
        <div className={style.textfield}>Family Wealth</div>
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
        <div className={style.textfield}>Current Location</div>
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
        <div className={style.textfield}>Relatives Surnames</div>
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
        <div className={style.textfield}>Unmarried Brothers</div>
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
        <div className={style.textfield}>Married Brothers</div>
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
        <div className={style.textfield}>Unmarried Sisters</div>
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
        <div className={style.textfield}>Married Sisters</div>
      </div>

      <div className={style.radioButtonGroup}>
            <span className={style.title}>Father Alive</span>

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
            <span className={style.title}>Mother Alive</span>

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
            <span className={style.title}>Parents living Together?</span>

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
            <span className={style.title}>Inter-Caste Marriage in Family?</span>

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

export default FamilyDetails;
