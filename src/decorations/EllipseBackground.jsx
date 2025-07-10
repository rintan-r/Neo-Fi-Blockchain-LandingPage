export default function EllipseBackground({
    width = 606,
    height = 425,
    color = "#4A5AEC",
    opacity = 0.06,
    blur = 279.8,
    top = "0px",
    left = "0px",
    className = "",
    centerX = false,
}) {
    return (
        <div
            className={`pointer-events-none absolute rounded-full ${className} ${
                centerX ? "left-1/2 -translate-x-1/2" : ""
            }`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: color,
                opacity: opacity,
                filter: `blur(${blur}px)`,
                top: top,
                ...(centerX ? {} : { left: left }), // hanya pakai left jika tidak centerX
                zIndex: 0,
            }}
        />
    );
}
