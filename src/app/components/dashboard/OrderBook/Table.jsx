"use client";

export default function Table({ data, headers }) {
    return (
        <table>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.price}>
                        {Object.values(item).map((value, index) => (
                            <td key={index}>{value}</td>
                        ))}
                        <td>{item.quantity * item.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
