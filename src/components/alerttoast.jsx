export default function AlertToast({ show, type = "success", message, onClose }) {
    if (!show) return null;

    return (
        <div
            className="toast-container position-fixed top-0 end-0 p-3"
            style={{ zIndex: 1100 }}
        >
            <div className={`toast show align-items-center text-bg-${type} border-0`}>
                <div className="d-flex">
                    <div className="toast-body">
                        {message}
                    </div>
                    <button
                        type="button"
                        className="btn-close btn-close-white me-2 m-auto"
                        onClick={onClose}
                        aria-label="Close"
                    />
                </div>
            </div>
        </div>
    );
}
