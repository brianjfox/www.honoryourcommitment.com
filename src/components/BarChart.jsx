// Dependency-free horizontal bar chart for the economic-impact dashboard.
export default function BarChart({ data, unit = '', valueFormat }) {
  const max = Math.max(...data.map((d) => d.value), 1)
  return (
    <ul className="barchart" role="img">
      {data.map((d) => {
        const pct = (d.value / max) * 100
        const display = valueFormat ? valueFormat(d.value) : `${d.value}${unit}`
        return (
          <li className="barchart__row" key={d.label}>
            <span className="barchart__label">{d.label}</span>
            <span className="barchart__track">
              <span
                className="barchart__fill"
                style={{ width: `${pct}%` }}
              />
            </span>
            <span className="barchart__value">{display}</span>
          </li>
        )
      })}
    </ul>
  )
}
