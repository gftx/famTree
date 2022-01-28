
const Header = () => {
    return (
        <header className='header'>
            <h3 className='header-logo'>fam tree</h3>
            <ul className='header-list'>
                {/* {headerMenu.map(item => (
                  <Link key={item.id} to={item.slug}>
                      <li className='header-list__item'>
                          {item.title}
                      </li>
                  </Link>
              ))} */}
            </ul>
        </header>
    )
}

export { Header }