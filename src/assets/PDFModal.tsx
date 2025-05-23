import './PDFModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export function toggleModal() {
      const modal = document.querySelector('.modal') as HTMLDivElement;
      const close = document.querySelector('.close') as HTMLDivElement;
      const pdfModal = document.querySelector('#pdfModal') as HTMLDivElement;

      modal.style.display = 'block';
      pdfModal.style.display = 'block';

      close.onclick = function() {
        modal.style.display = 'none';
        pdfModal.style.display = 'none';
      }
}

export const PDFModal = () => {
  return (
    <>
      <div className="modal">
        <div className="modal-content" id="pdfModal">
          <FontAwesomeIcon icon={faX} className="close" />
        <embed src="images/Beckett_Alexander - Resume.PDF" width="500" height="375" 
            type="application/pdf"/>
            </div>
      </div>
    </>
  );
};

