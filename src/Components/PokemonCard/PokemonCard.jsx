import {Card} from 'antd';
import './PokemonCard.css'
import Meta from "antd/es/card/Meta.js";
import {useEffect, useRef} from "react";
import {AddFavoriteButton} from "../AddFavoriteButton/AddFavoriteButton.jsx";
import {useDispatch} from "react-redux";
import {setFavorite} from "../../slices/dataSlice.js";

function PokemonCard({title, cover, types, index, id, favorite}) {

    const cardRef = useRef(null);

    const pokemonTypes = types.reduce((typesValueArray, currentTypeOject) => {
        typesValueArray.push(currentTypeOject.type.name);
        return typesValueArray;
    }, [])

    const styles = {
        header: {
            background: `var(--${pokemonTypes[0]})`,
            color: 'white'
        },
        cover: {
            aspectRatio: '4/3'
        }
    };

    useEffect(() => {

        function onScrollCardAnimation(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';

                    // Lazy Loading for pokemon img
                    const pokemonImg = entry.target.querySelector('.ant-card-cover img');
                    pokemonImg.setAttribute('src', pokemonImg.getAttribute('imgurl'))

                } else {
                    entry.target.style.transform = 'translateY(20px)';
                    entry.target.style.opacity = '0';
                }
            })
        }

        const options = {
            threshold: 0.1
        }

        const observer = new IntersectionObserver(onScrollCardAnimation, options)

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        };
    }, []);

    const dispatch = useDispatch()

    function addTofavorite() {
        dispatch(setFavorite({pokemonId: id}))
    }

    return <Card
        ref={cardRef}
        className='PokemonCard'
        title={`#${index} ${title}`}
        cover={<Img
            className="coverImg"
            src={cover}
            alt={title}/>}
        extra={<AddFavoriteButton isfavorite={favorite} onClick={addTofavorite}/>}
        styles={{
            header: styles.header,
            cover: styles.cover
        }}
    >
        <Meta description={
            <div className="types-list">
                {pokemonTypes.map(type => <span
                    key={type}
                    style={
                        {
                            backgroundColor: `var(--${type})`,
                            border: `1px solid var(--${type})`
                        }
                    }
                >{type}</span>)
                }
            </div>
        }/>
    </Card>
}

function Img({src, alt}) {
    return <img
        style={{width: '100%', height: '100%'}}
        imgurl={src}
        src=''
        alt={alt}/>
}

export {PokemonCard};