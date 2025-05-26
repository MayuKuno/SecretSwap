# SecretSwap

**SecretSwap** is a lightweight gift exchange app inspired by the idea of Secret Santa —  
but designed for any time of year, and for any group of friends, teammates, or loved ones.

It’s a simple way to create thoughtful, secret gift-giving experiences.  
Participants join a group, get matched with someone, view their wishlist and preferences, and send messages —  
all while keeping their identity a secret until the big reveal.

Whether it’s for a birthday, a celebration, or just a kind gesture, SecretSwap helps you surprise someone special with a meaningful gift.

---

## Features

- Secret recipient assignment within each group
- Share wishlists and personal preferences
- Send messages to your assigned recipient — without revealing who you are
- Add optional delivery information for easier gift coordination

---

## User Flow

```plaintext
/ (Home)
- App overview
- "Join a group" or "Create a group" buttons

/join
- Enter your nickname
- Choose to:
  - Create a new group (input group name → receive group code)
  - Join an existing group (enter group code)

/group/{groupId}
- Group dashboard
- View group status and members
- When everyone is ready, the group creator starts the matching
- See only your assigned recipient (others remain a secret)
- View their wishlist and preferences
- Send them secret messages

/mypage
- Set your own:
  - Wishlist
  - Preferences and hobbies
  - Optional delivery address (shared only with your gift sender)
````

---

## Tech Stack

| Area       | Technology                            |
| ---------- | ------------------------------------- |
| Frontend   | React (Next.js), TypeScript           |
| Styling    | Tailwind CSS, shadcn/ui               |
| API        | AWS Lambda + API Gateway              |
| Database   | Amazon DynamoDB                       |
| Hosting    | Amazon S3 + CloudFront                |
| Deployment | GitHub Actions + Serverless Framework |

---

## License

MIT License
Feel free to fork, remix, or contribute

---

## About the Developer

Created by [Mayu Kuno](https://github.com/MayuKuno)
Portfolio: [https://ninefs-portfolio.onrender.com/](https://ninefs-portfolio.onrender.com/)

```
