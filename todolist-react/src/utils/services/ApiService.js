import Todo from '../models/Todo'

class ApiService {
    /**
     * @description Récupération des 6 dernière todos
     * @returns Un tableau d'instance de todos (asynchrone)
     */
    async getTodoList() {
        return fetch('https://dummyjson.com/todos/?limit=6')
            .then(res => res.json())
            .then(data => {
                return data.todos.map(todo => new Todo(todo))
            });
    }

    /**
     * @description Récupération d'une todo avec son id, pour la supprimé
     * @param {Number} id Id de la todo à supprimer
     * @returns Un nouveau tableau de todo (asynchrone), sans la todo supprimé
     */
    async deleteTodoElement(id) {
        return fetch('https://dummyjson.com/todos/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                return new Todo(data)
            });
    }

    /**
     * @description Récupération d'une todo avec son id, pour l'update (checked)
     * @param {Number} id Id de la todo à update
     * @returns Un nouveau tableau de todo (asynchrone), avec la todo modifié
     */
    async updateTodoElement(id, completed) {
        return fetch('https://dummyjson.com/todos/' + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: completed,
            })
        })
            .then(res => res.json())
            .then(data => {
                return new Todo(data)
            });
    }

    /**
     * @description Création d'une nouvelle todo
     * @param {String} todo Description ou texte de la todo
     * @returns Un nouveau tableau de todo (asynchrone), avec une nouvelle todo
     */
    async createTodoElement(todo) {
        return fetch('https://dummyjson.com/todos/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: todo,
            })
        })
            .then(res => res.json())
            .then(data => {
                return new Todo(data)
            });
    }
}

export default ApiService