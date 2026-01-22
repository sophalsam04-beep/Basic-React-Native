// Introduction of Array and mapping

const Items = ["Apple", "Banana","Orange"];

<ul>
    {Items.map(Items => (
        <li key={Items}>{Items}</li>
    ))}
</ul>

const list = ["Macbook","Asus Vivo Books","Accer","Asus"];

<ul>
    {list.map(list => (
        <li key={list}>{list}</li>
        
    ))}
</ul>

const stock = ["Networking","Mobile App","Desktop Apps"];

<ul>
    {stock.map(stock => (
        <li key={stock}>
            {stock}
        </li>
    ))}
</ul>

const vegetable = ["Vegetarian","Salad"];

<ul>
    {vegetable.map(vegetable => (
        <li key={vegetable}>
            {vegetable}
        </li>
    ))}
</ul>
