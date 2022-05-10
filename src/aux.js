export const flagStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "1rem",
};

export const iconStyle = {
    width: "30px",
    height: "30px",
};

export const clearAllInputs = () => {
    Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
    );
};