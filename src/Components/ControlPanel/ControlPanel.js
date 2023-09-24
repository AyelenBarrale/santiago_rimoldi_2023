import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";

const ControlPanel = ({ pageNumber, numPages, setPageNumber }) => {
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;

  const classFirstPage = isFirstPage ? "disable" : "available";
  const classLastPage = isLastPage ? "disable" : "available";

  const goToNextPage = () => {
      if(!isLastPage) setPageNumber(pageNumber + 1)
  };
  const goToPrevPage = () => {
    if(!isFirstPage) setPageNumber(pageNumber - 1)
  };

  return (
    <div className='control-panel'>
      <FontAwesomeIcon
        icon={faBackward}
        className={classFirstPage}
        onClick={goToPrevPage}
      />
      <span className='spanText'>
        Page {pageNumber} of {numPages}{" "}
      </span>
      <FontAwesomeIcon
        icon={faForward}
        className={classLastPage}
        onClick={goToNextPage}
      />
    </div>
  );
};

export default ControlPanel;
