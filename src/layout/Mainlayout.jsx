function mainlayout (props) {
    const { body } = props;

    return (
        <div className="container mx-auto">
            <div className="weather">
                { body }
            </div>
        </div>
    );
}

export default mainlayout;