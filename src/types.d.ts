export type TEvents = {
	eventName: string;
	eventDescription: string;
	eventDate: string;
	guestName: string;
	guestPhoto: string;
	guestDesignation: string;
	hostName: string;
	hostPhoto: string;
	hostEmail: string;
	members: Member[];
};

type Member = {
	memberName: string;
	memberLastName: string;
	memberEmail: string;
	memberPhoto: string;
	memberOutcome: string;
};
