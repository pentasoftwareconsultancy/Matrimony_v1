import style from "./Search.module.css";
import Accordion from "react-bootstrap/Accordion";

function Search() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filter Results</Accordion.Header>
          <Accordion.Body>
            <div className={style.formContainer}>
              <div className={style.iconSelect}>
                <select
                  className={style.iconSelect}
                  // id="iconSelect"
                  // value={selectedIcon}
                  // onChange={(e) => setSelectedIcon(e.target.value)}
                >
                  <option value="">Gender</option>
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
                  <option value="male">UnMarried</option>
                  <option value="female">Seperated</option>
                  <option value="female">Window</option>
                </select>
              </div>
              <div className={style.iconSelect}>
                <select
                  className={style.iconSelect}
                  // id="iconSelect"
                  // value={selectedIcon}
                  // onChange={(e) => setSelectedIcon(e.target.value)}
                >
                  <option value="">Caste</option>
                  <option value="male">Maratha</option>
                  <option value="female">Maratha</option>
                </select>
              </div>
              <div className={style.iconSelect}>
                <select
                  className={style.iconSelect}
                  // id="iconSelect"
                  // value={selectedIcon}
                  // onChange={(e) => setSelectedIcon(e.target.value)}
                >
                  <option value="">Minimun Height</option>
                  <option value="male">4.6</option>
                  <option value="female">4.8</option>
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
                  <option value="male">5.10</option>
                  <option value="female">5.11</option>
                </select>
              </div>
              <div className={style.iconSelect}>
                <select
                  className={style.iconSelect}
                  // id="iconSelect"
                  // value={selectedIcon}
                  // onChange={(e) => setSelectedIcon(e.target.value)}
                >
                  <option value="">Expected Education</option>
                  <option value="male">Maratha</option>
                  <option value="female">Maratha</option>
                </select>
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
                <div className={style.textfield}>Location</div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Search;
