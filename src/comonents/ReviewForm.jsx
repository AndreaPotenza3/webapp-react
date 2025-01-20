import axios from "axios"
import { useState } from "react"

export default function Form({ id, onSuccess = () => { } }) {

    const initialFormData = {
        name: '',
        text: '',
        vote: 1
    }

    const [formData, setFormData] = useState(initialFormData)

    function changeForm(e) {
        const { value, name } = e.target
        console.log(value, name)

        setFormData({

            ...formData,
            [name]: value

        })
    }

    function storeReview(e) {
        e.preventDefault()

        const data = {
            name: formData.name.trim() || undefined,
            text: formData.text.trim(),
            vote: parseInt(formData.vote)
        }

        axios.post(`http://localhost:3000/movies/${id}/reviews`, data)
            .then(res => {
                console.log(res)
                setFormData(initialFormData)
                onSuccess()
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <form onSubmit={storeReview} action="" className="my-3 mx-4 d-flex flex-column">
                <h3>Invia una recensione</h3>
                <label className="fw-bold  pb-1">Nome</label>
                <input className="mb-2" type="text" id="name" name="name" value={formData.name} placeholder="Nome" onChange={changeForm} />
                <label className="fw-bold pb-1">Recensione</label>
                <textarea className="mb-2" name="text" id="text" value={formData.value} placeholder="Scrivi una recensione..." onChange={changeForm}></textarea>
                <label className="fw-bold pb-1">Voto</label>
                <select className="mb-2" name="vote" id="vote" value={formData.vote} placeholder="1" onChange={changeForm}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button className="btn btn-primary">invia</button>
            </form>
        </>
    )
}