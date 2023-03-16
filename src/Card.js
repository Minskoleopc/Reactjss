function Card({firstName,lastName}) {


    const styles = {
        border: '1px solid black',
    };
    return (<div style={styles}>
        <h1>fN:{firstName}</h1>
        <h1>lN:{lastName}</h1>
    </div>)
}
export default Card;