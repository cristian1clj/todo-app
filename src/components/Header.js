const Header = ({ setSearchedList }) => {
    return (
        <header>
            <h1>ToDo</h1>
            <div className="form-search one-line-form">
                <input 
                    type="text" 
                    onChange={e => setSearchedList(e.target.value)}
                    placeholder="search list..." 
                />
                <button type="button">
                    <img className="icon" src="/searchicon.png" alt="search icon" />
                </button>
            </div>
        </header>
    );
}

export default Header;