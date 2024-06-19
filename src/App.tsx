import './styles.css'
import IMAGE from './headerBG.png'

export const App = () => {
    return <>
    <header>
        <h1 class="header-text">Search for books</h1>
        <div class="header-options">
            <input
                type="text"
                placeholder="What do you want?"
                class="center-domain"
                />
            <div class="options-filters">
                <div class="options-categories">
                <span class="options-categories__text">Categories</span>
                <select id="book-categories" class="options-categories__selector">
                    <option value="all">all</option>
                    <option value="programming">.programming</option>
                    <option value="3">.3</option>
                    <option value="3">.4</option>
                </select>
                </div>
            </div>
        </div>
    </header>
    </>
}