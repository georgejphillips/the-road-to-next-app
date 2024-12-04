import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

type TicketPagePros = {
  params: {
    ticketId: string,
    content: string,
  }
}

const TicketPage = ({ params }: TicketPagePros) => {
  const ticket = initialTickets.find((ticket) => ticket.id === params.ticketId);

  if (!ticket) {
    return <Placeholder
      label="Ticket not found"
      button={
        <Button asChild variant="outline">
          <Link href={ticketsPath()}>Go to tickets</Link>
        </Button>
      }
    />;
  }

  return (
    <div>
      <h2>{ticket.title}</h2>
      <p className="">{ticket.content}</p>
    </div>
  )
}

export default TicketPage;