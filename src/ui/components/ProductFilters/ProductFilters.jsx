import {useState} from "react";

import './ProductFilters.css'

export function ProductFilters({
    searchTerm,
    selectedCategory,
    sortBy,
    onInputSearchTerm,
    onSelectCategory,
    onSelectSorting
    }) {
    const [showFilters, setShowFilters] = useState(false)

    const handleSearchChange = (e) => {
        onInputSearchTerm(e.target.value)
    }

    const handleCategoryChange = (e) => {
        onSelectCategory(e.target.value)
    }

    const handleSortChange = (e) => {
        onSelectSorting(e.target.value)
    }

    return (
        <div className="filters">
            <div className="search">
                <input
                    type="text"
                    placeholder="Поиск товаров..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="filter-controls">
                {showFilters && (
                    <>
                        <select value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="all">Все категории</option>
                            <option value="phones">Телефоны</option>
                            <option value="laptops">Ноутбуки</option>
                            <option value="tablets">Планшеты</option>
                        </select>

                        <select value={sortBy} onChange={handleSortChange}>
                            <option value="name">По названию</option>
                            <option value="price">По цене</option>
                        </select>
                    </>
                )}
                <button onClick={() => setShowFilters(!showFilters)}>
                    {showFilters ? 'Скрыть фильтры' : 'Показать фильтры'}
                </button>
            </div>
        </div>
    )
}