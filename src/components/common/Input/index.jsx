const Input = (props) => {
    const { type, id, name, title, ...rest } = props;

    return (<div>
        <label for={id}>{title}</label>
        <input
            type={type}
            id={id}
            name={name}
            placeholder={title}
            {...rest}
        />
    </div>)
};

export default Input;