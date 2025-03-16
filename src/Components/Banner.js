import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Junior Development Engineer", "frontEnd Developer", "BackEnd Developer"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100); 
    const period = 2000;


    useEffect(() => {
        let ticker = setInterval(()=> {
            tick();
        }, delta)
        
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) :  fullText.substring(0, text.length + 1)
        
        setText(updateText);
        
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        
        if (!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }else if (isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }else {
            setIndex(prevIndex => prevIndex + 1);
          }

}
return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline"> welcome to my protfolio</span>
                    <h1> {`Hi I'm Ndumiso`}<span className="wrap"> {text}</span></h1>
                    <p> Passionate and detail-oriented junior software developer at Bet Software, with a strong foundation in software development, problem-solving, and collaboration. Skilled in writing clean, efficient code and continuously learning new technologies to enhance development processes. Enjoy working in fast-paced environments, contributing to team projects, and delivering high-quality solutions. Committed to growing as a developer and making a meaningful impact through innovative software solutions. </p>
                    <button onClick={() => console.log('connect')}>Lets connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Headder img"/>
                </Col>
            </Row>
        </Container>
    </section>

)

}