import React from 'react';
import axios from 'axios';
import './list.css';

const List = ({isExpanded}) => {
    const search_endpoint = 'https://api.github.com/search/repositories?q=react';
    const [names, setName] = React.useState([]);
    const [forks, setForks] = React.useState([]);
    const [stars, setStars] = React.useState([]);
    const [isLoading, setIsLoading ] = React.useState(false);

    React.useEffect(() => {
        getReactRepositories();
    }, [])

    let arrNames = [];
    let arrForks = [];
    let arrStars = [];

    const getReactRepositories = async () => {

        setIsLoading(true);

        try{
            const res = await axios.get(search_endpoint);
            const arrayOfItems = res.data.items
    
            arrayOfItems.map(({ name, forks, stargazers_count }) => {
                arrNames.push(name);
                arrForks.push(forks);
                arrStars.push(stargazers_count);
    
                return [arrForks, arrNames, arrStars]
            })
    
            setIsLoading(false);
    
            setName(arrNames);
            setForks(arrForks);
            setStars(arrStars);

        }catch(err){
            console.log(err)
        }
       

    }

    return (
        <div className='test'>
            <h1 className='title'>Coding task</h1>
            <p> Write a simple React Application that renders list of repositories In the following manner:</p>
            {isLoading ? <p>Loading...</p> : <ul className={`list ${isExpanded ? 'expandList' : ''}`}>
                <li className='itemsTitle'>Name
                    <ul className='items'>
                        {names?.slice(0,7).map((name) => {
                            return (
                                <ol>{name}</ol>
                            )
                        })}
                    </ul>
                </li>
                <li className='itemsTitle'>Forks
                    <ul className='items'>
                        {forks?.slice(0,7).map((name) => {
                            return (
                                <ol>{name}</ol>
                            )
                        })}
                    </ul>
                </li>
                <li className='itemsTitle'>Stars
                    <ul className='items'>
                        {stars?.slice(0,7).map((name) => {
                            return (
                                <ol>{name}</ol>
                            )
                        })}
                    </ul>
                </li>
            </ul>}
        </div>
    )
}

export default List;