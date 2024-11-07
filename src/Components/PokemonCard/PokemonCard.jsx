import {Card} from 'antd';
import './PokemonCard.css'
import Meta from "antd/es/card/Meta.js";
import {StarOutlined} from "@ant-design/icons";
import {useEffect, useRef} from "react";

function PokemonCard({title}) {

    const cardRef = useRef(null);

    useEffect(() => {

        function onScrollCardAnimation(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
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


    return <Card
        ref={cardRef}
        className='PokemonCard'
        title={title}
        cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Ditto"/>}
        extra={<StarOutlined className="custom-star-icon"/>}
        headStyle={{background: 'var(--primary-light)', color: 'white'}}
    >
        <Meta description="fire, magic"/>
    </Card>
}

export {PokemonCard};