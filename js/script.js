const navBar = [
    {
        id: '1',
        name: 'Home'
    },
    {
        id: '2',
        name: 'Team'
    },
    {
        id: '3',
        name: 'Service'
    },
    {
        id: '4', 
        name: 'Blog'
    },
    {
        id: '5',
        name: 'Contuct us'
    }
]

const Menu = navBar.mapp((e) => <li key="e.id"></li>)
    



const Nav = () => {
    return (
        <div>
           <Menu />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Nav />)