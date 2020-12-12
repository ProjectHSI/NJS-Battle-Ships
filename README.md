# NOTICE ABOUT SIGNING AND OPENGPG

First of. Acnoryms.
SK = Secret Key [Private Key. Just Allows it to be a acnorym.]
PK = Public Key

## What is OpenPGP?

    ![Signed Commit](https://github.com/ProjectHSI/NJS-Battle-Ships/blob/master/Signed%20Commit.png?raw=true)

You've Probably Seen This. This is a signed commit of mine. This is signed using OpenPGP.

| Encrypt | Encrypts Using Your Own SK                                                                                 |

| Sign    | Signs Files Make them Vaild. This is what Signed Commits have done. They are signed with actual GPG Codes. |

| Verify  | Verifies a file using it's Signature File. You needs it's respective PK to verify it.                      |

| Decrypt | Reverts an encryption using a respective PK.                                                               |

## Why is there no Signature Files For The Things?

Two Things.

1. First off. It doesn't make sense. They Signed The Commit using **THEIR OWN SK.** It's gotta be good!

2. I made this for people that want to play online. Like maybe they want to play Battle Ships but they are far away. If you want to. Go ahead! Create The Signature Files. The Actual Signature Files Are Hidden Behind the .gitignore file. As I've excluded them. If they wanted to verify my files.

## Can I sign them?

Yes you can! The License allows modification of the main software. See CONTRIBUTING.MD and LICENSE, I am pretty sure this means you can sign them.
