import Link from "next/link"
export function Button(props: { buttonText: string, class: string, click?: () => void }) {
    return (
        <button
                type="button"
                onClick={props.click}
                className= {props.class}
              > 
                {props.buttonText}
              </button>
    )
}
export function LinkButton(props: { buttonText: string, class: string, href: string }) {
    return (
        <Link href={props.href}>
        <button
                type="submit"
                className= {props.class}
              >
                {props.buttonText}
              </button>
        </Link>
        
    )
}