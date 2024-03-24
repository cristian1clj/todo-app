const Header = () => {
    return (
        <header>
            <h1>ToDo</h1>
            <form className="form-search one-line-form">
                <input type="text" name="" id="" placeholder="search list..." />
                <button>
                    <img className="icon" src="/searchicon.png" alt="search icon" />
                </button>
            </form>
        </header>
    );
}

export default Header;