const Header = ({ setSearchedCategory }) => {
    return (
        <header>
            <h1>ToDo</h1>
            <div className="form-search one-line-form">
                <input 
                    type="text" 
                    onChange={e => setSearchedCategory(e.target.value)}
                    placeholder="search category..." 
                />
                <button type="button">
                    <img className="icon" src="/searchicon.png" alt="search icon" />
                </button>
            </div>
        </header>
    );
}

export default Header;