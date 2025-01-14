export default function Form() {
    return (
        <>
            <form action="" className="my-3 mx-4 d-flex flex-column g-4">
                <h3>Invia una recensione</h3>
                <input type="text" value="name" placeholder="Nome" />
                <textarea name="name" id="" value="name" placeholder="Scrivi una recensione..."></textarea>
                <select name="vote" id="" value="name" placeholder="1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </form>
        </>
    )
}